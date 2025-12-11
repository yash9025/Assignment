import { useState } from "react";

const InviteForm = () => {
  //setup form
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    department: ""
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);  //to show success message

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();  //prevent reloading
    setLoading(true);

    setTimeout(() => {  //2sec to fetch api
      setLoading(false);
      setDone(true);
    }, 2000);
  };

  return (
    <div className="p-6 border rounded-xl bg-white shadow-lg max-w-sm">
      <h2 className="text-xl font-semibold mb-5 text-gray-800">Invite Team Member</h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          name="email"
          value={form.email}
          onChange={updateField}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <select
          name="role"
          value={form.role}
          onChange={updateField}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Member">Member</option>
        </select>
        <input
          name="department"
          value={form.department}
          onChange={updateField}
          placeholder="Department"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all"
        >
          {loading ? "Sending invite..." : "Invite"}
        </button>
      </form>

      {done && (
        <p className="text-green-600 mt-4 text-sm font-medium">
          Invitation sent successfully.
        </p>
      )}
    </div>
  );
};

export { InviteForm };
