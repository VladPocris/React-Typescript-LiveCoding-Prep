import UsersApiPractice from './UsersApiPractice';
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest'

describe('UsersApiPractice API states', () => {
    afterEach(() => {
        vi.useRealTimers();
        vi.unstubAllGlobals();
    })

    it('shows loading while users are being fetched', () => {
        vi.stubGlobal("fetch", vi.fn(() => new Promise(() => { })));

        render(<UsersApiPractice />)

        expect(screen.getByText("Loading users...")).toBeInTheDocument();
    });
    it('renders users when fetch succeeds', async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, name: "Test", email: "test@mail.com" }] }));

        render(<UsersApiPractice />)

        expect(await screen.findByText("Name: Test")).toBeInTheDocument();
        expect(await screen.findByText("Email: test@mail.com")).toBeInTheDocument();
    });
    it('shows error when response is not ok', async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));

        render(<UsersApiPractice />)

        expect(await screen.findByText("Error: HTTP error! Status: 500")).toBeInTheDocument();
    });
    it('debounce search should update after 500ms when user stops typing', async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, name: "Test", email: "test@mail.com" }, { id: 2, name: "Leanne Graham", email: "test@mail.com" }] }));

        render(<UsersApiPractice />);

        expect(await screen.findByText("Name: Leanne Graham")).toBeInTheDocument();
        expect(await screen.findByText("Name: Test")).toBeInTheDocument();

        vi.useFakeTimers()
        const searchInput = screen.getByPlaceholderText("Search users...");

        fireEvent.change(searchInput, { target: { value: "L" } });
        expect(screen.getByText("Name: Test")).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(500);
        })

        expect(screen.getByText("Name: Leanne Graham")).toBeInTheDocument();
        expect(screen.queryByText("Name: Test")).not.toBeInTheDocument();
    });
    it("shows error when fetch rejects", async () => {
        vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network Error")));

        render(<UsersApiPractice />)

        expect(await screen.findByText(/Error: Network Error/i)).toBeInTheDocument();
    });
    it("shows no users found when API returns an empty list", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => [] }))

        render(<UsersApiPractice />)

        expect(await screen.findByText("No users found.")).toBeInTheDocument();
    });
    it("shows no users found when search has no matches", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, name: "Test", email: "Test@mail.com" }, { id: 2, name: "Leane", email: "Leane@mail.com" }] }))

        render(<UsersApiPractice />)

        expect(await screen.findByText("Name: Test")).toBeInTheDocument();
        expect(await screen.findByText("Name: Leane")).toBeInTheDocument();

        vi.useFakeTimers()

        fireEvent.change(screen.getByPlaceholderText("Search users..."), { target: { value: "zzz" } });
        expect(screen.getByText("Name: Test")).toBeInTheDocument();
        expect(screen.getByText("Name: Leane")).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(500);
        })

        expect(screen.getByText("No users found.")).toBeInTheDocument();
        expect(screen.queryByText("Name: Test")).not.toBeInTheDocument();
        expect(screen.queryByText("Name: Leane")).not.toBeInTheDocument();

    })
})