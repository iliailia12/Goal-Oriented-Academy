// 🎥 Async/Await Task: "Upload a YouTube Video"
// 🧩 Steps:
// 1. Render video – 4 sec → "Rendering..."
// 2. Upload – 3 sec → "Uploading..."
// 3. Add title & tags – 1.5 sec → "Metadata added..."
// 4. Published – no delay → "Video is live!"


async function UploadYouTubeVideo() {
  console.log("Starting video upload...");

  await new Promise((resolve) => {setTimeout(() => { console.log("Rendering..."); resolve();}, 4000);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Uploading..."); resolve();}, 3000);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Metadata added..."); resolve();}, 1500);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Video is live!"); resolve();}, 0);});

  console.log("Video is live!");
}

UploadYouTubeVideo();



