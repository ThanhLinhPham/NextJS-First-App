import fs from "fs";
import path from "path";

// Trỏ vào thư mục gốc sau đó lấy thư mục books
const booksDir = path.join(process.cwd(), "books");

export const getBooks = () => {
  // Lấy ra các file trong thư mục books (Array)
  const bookFileNames = fs.readdirSync(booksDir);

  const booksData = bookFileNames.map((bookFileName) => {
    // Trỏ vào các file
    const fullBookPath = path.join(booksDir, bookFileName);
    // Lấy content từng file
    const bookContent = fs.readFileSync(fullBookPath, "utf-8");
    return {
      bookName: bookFileName.replace(/\.txt$/, ""),
      bookContent,
    };
  });
  return booksData;
};
