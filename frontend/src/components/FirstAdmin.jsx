const users = [
  { id: 1, name: "Sarah", role: "Member" },
  { id: 2, name: "Mike", role: "Admin" },
  { id: 3, name: "Jess", role: "Member" }
];

const FirstAdmin = () => {
  const admin = users.find((u) => u.role === "Admin");

  return (
    <p className="mt-4 text-sm text-gray-700">
      First Admin: <span className="font-medium text-gray-900">{admin?.name}</span>
    </p>
  );
};

export { FirstAdmin };
