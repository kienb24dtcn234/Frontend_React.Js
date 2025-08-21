function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const user = { id: 1, name: "Kiên" };
const profile = { active: true, score: 95 };
const merged = mergeObjects(user, profile);
console.log(merged);
console.log(merged.id, merged.name, merged.active, merged.score);
