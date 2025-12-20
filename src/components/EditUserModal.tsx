"use client";
import { useState } from "react";

interface EditUserModalProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  open: boolean;
  onClose: () => void;
  onSave: (user: { id: string; name: string; email: string; role: string }) => void;
}

export default function EditUserModal({ user, open, onClose, onSave }: EditUserModalProps) {
    const [resetStatus, setResetStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'user',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open || !user) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Only update fields that are not empty, otherwise keep the original value
      const updatedUser = {
        ...user,
        name: form.name !== '' ? form.name : user.name,
        email: form.email !== '' ? form.email : user.email,
        role: form.role
      };
      await onSave(updatedUser);
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to update user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Name"
            // Name is not required when editing user
            required={false}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            required={false}
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="button"
            className="w-full mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={async () => {
              setResetStatus(null);
              try {
                const res = await fetch(`/api/auth/forgot-password`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email: user.email })
                });
                if (res.ok) {
                  setResetStatus('Password reset email sent!');
                } else {
                  setResetStatus('Failed to send reset email.');
                }
              } catch {
                setResetStatus('Failed to send reset email.');
              }
            }}
          >
            Send Password Reset Email
          </button>
          {resetStatus && <p className="text-blue-600 text-sm mt-1">{resetStatus}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700" style={{opacity: 1, visibility: 'visible'}} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
