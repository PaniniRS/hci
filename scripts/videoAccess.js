async function accessCamera() {
  try {
    const videoElement = document.getElementById("camera");

    // Request access to the camera
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // Stream the video to the video element
    videoElement.srcObject = stream;
  } catch (error) {
    console.error("Error accessing the camera:", error);
    alert("Unable to access the camera. Please check your permissions.");
  }
}
// Start accessing the camera
window.addEventListener("load", accessCamera);
