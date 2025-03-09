Array.prototype.groupBy = function (callback) {
    return this.reduce((acc, item) => {
        const key = callback(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "admin" },
    { id: 4, name: "David", role: "user" }
];

const groupedByRole = users.groupBy(user => user.role);
console.log(groupedByRole);
/*
{
  admin: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 3, name: "Charlie", role: "admin" }
  ],
  user: [
    { id: 2, name: "Bob", role: "user" },
    { id: 4, name: "David", role: "user" }
  ]
}
*/
