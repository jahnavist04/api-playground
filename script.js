
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", async () => {
    const method = document.getElementById("method").value;
    const url = document.getElementById("url").value.trim();
    const body = document.getElementById("requestBody").value;

    const status = document.getElementById("status");
    const response = document.getElementById("response");

    if (!url) {
        status.textContent = "Please enter an API URL.";
        return;
    }

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (["POST", "PUT"].includes(method)) {
        try {
            options.body = JSON.stringify(JSON.parse(body));
        } catch {
            status.textContent = "Invalid JSON request body.";
            return;
        }
    }

    sendBtn.disabled = true;
    status.textContent = "Sending request...";
    response.textContent = "";

    const startTime = performance.now();

    try {
        const result = await fetch(url, options);
        const endTime = performance.now();

        const text = await result.text();

        let formatted;

        try {
            formatted = JSON.stringify(JSON.parse(text), null, 2);
        } catch {
            formatted = text || "Empty response";
        }

        status.textContent =
            `Status: ${result.status} ${result.statusText} | ` +
            `Time: ${(endTime - startTime).toFixed(2)} ms`;

        response.textContent = formatted;

    } catch (error) {
        status.textContent = "Request failed";
        response.textContent = error.message;
    } finally {
        sendBtn.disabled = false;
    }
});
