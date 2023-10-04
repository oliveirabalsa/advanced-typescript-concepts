// Export types
export type Name = {
  name: string;
};
export type Age = {
  age: number;
};

// Define a union type
type Union = Name | Age;

// Define an intersection type
type Intersection = Name & Age;

// Create instances of the types
const name: Name = { name: "Jane" };
const age: Age = { age: 29 };
const nameAndAge: Intersection = { name: "Jane", age: 29 };

// Use the types
let union: Union;
union = name; // OK
union = age; // OK
union = nameAndAge; // OK

let intersection: Intersection;
intersection = nameAndAge; // OK
intersection = name; // Error
intersection = age; // Error

interface UnionTest {
  name: "Jane" | "John";
}

const nameInterface: UnionTest = { name: "Jane" }; // OK
const nameInterface2: UnionTest = { name: "John" }; // OK
const nameInterface3: UnionTest = { name: "Jill" }; // Error
