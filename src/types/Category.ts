export type Category =
  | "Illustration"
  | "Animation"
  | "Design"
  | "Video"
  | "Photography";

export type CategoryWithId = {
  name: Category;
  id: string;
};