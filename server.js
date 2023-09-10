#!/usr/bin/node
import Express from "express"
const app = Express()
const port = process.env.PORT || 3000

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
app.get("/api", (req, res) => {
    const {slack_name, track} = req.query;
    const now = new Date()
    res.status(200).json({
  "slack_name": slack_name || "Olawole Olawale Martins",
  "current_day": daysOfWeek[now.getDay()],
  "utc_time": now.toISOString(),
  "track": track || "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/wulzymart/zuri_hngx_backend_1",
  "status_code": 200
})
})

app.listen(port, ()=>{
    console.log(`(Server started on port ${port}`);
})