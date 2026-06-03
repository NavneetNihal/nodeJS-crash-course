import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  try {
    // check if GET request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
      }

      const data = await fs.readFile(filePath)
      res.setHeader('content-Type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error("Not Found");
    }
  } catch (error) {
    res.writeHead(500, {
      "content-Type": "text/html",
    });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
