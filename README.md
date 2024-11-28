# Web Worker Demonstration: Offloading Heavy Tasks from the Main Thread

This project demonstrates how **Web Workers** can help run heavy computations without blocking the main thread, ensuring a smooth and responsive user interface (UI). 

---

## 📋 Overview

The example compares two approaches to running a heavy computational task (calculating Fibonacci numbers):

1. **Main Thread Execution**:
   - Runs the task directly on the main thread.
   - Blocks the UI during the task, making the application unresponsive.

2. **Web Worker Execution**:
   - Runs the task on a separate background thread using a Web Worker.
   - Keeps the UI responsive and interactive while the computation happens in parallel.

---

## 🚀 How It Works

### Main Thread
- Executes Fibonacci calculation directly, causing the browser to freeze until the task completes (You will not interactive with UI)
- For example, calculating Fibonacci for \(n = 45\).

### Web Worker
- Offloads the same Fibonacci calculation to a **dedicated background thread**.
- The Web Worker communicates with the main thread via `postMessage` to send results back once the task is complete.

---

## 🛠️ How to Run

1. Clone or download this repository:

```bash
git clone <repository_url>
cd <repository_folder>
```

2. Run

Run with **Live server**