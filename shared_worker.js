// shared-worker.js

let counter = 0; // Bộ đếm dùng chung

self.onconnect = (event) => {
  const port = event.ports[0]; // Nhận cổng kết nối

  // Gửi giá trị ban đầu của counter cho client
  port.postMessage(`Initial counter: ${counter}`);

  // Lắng nghe tin nhắn từ các kết nối
  port.onmessage = (messageEvent) => {
    if (messageEvent.data === "increment") {
      counter++; // Tăng bộ đếm
      port.postMessage(`Counter incremented: ${counter}`);
    } else if (messageEvent.data === "get") {
      port.postMessage(`Current counter: ${counter}`);
    } else {
      port.postMessage("Unknown command.");
    }
  };
};
