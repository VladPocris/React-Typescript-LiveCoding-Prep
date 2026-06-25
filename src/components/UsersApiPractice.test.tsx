import UsersApiPractice from './UsersApiPractice';
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'

describe('UsersApiPractice API states', () => {
    afterEach(() => {
        vi.unstubAllGlobals();
    })

    it('shows loading while users are being fetched', () => {
        vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));

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
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500}));

        render(<UsersApiPractice />)

        expect(await screen.findByText("Error: HTTP error! Status: 500")).toBeInTheDocument();
    });
})