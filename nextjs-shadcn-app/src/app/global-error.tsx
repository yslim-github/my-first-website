"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: "system-ui, sans-serif"
        }}>
          <div style={{
            maxWidth: "28rem",
            width: "100%",
            textAlign: "center",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            padding: "2rem"
          }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>500</h2>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Global Error
            </h3>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
              A critical error occurred. Please refresh the page.
            </p>
            {error.message && (
              <div style={{
                background: "#f3f4f6",
                padding: "1rem",
                borderRadius: "0.375rem",
                marginBottom: "1rem"
              }}>
                <code style={{ fontSize: "0.875rem", wordBreak: "break-all" }}>
                  {error.message}
                </code>
              </div>
            )}
            <button
              onClick={reset}
              style={{
                width: "100%",
                padding: "0.5rem 1rem",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "0.375rem",
                cursor: "pointer",
                fontSize: "0.875rem",
                marginBottom: "0.5rem"
              }}
            >
              Try Again
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              style={{
                width: "100%",
                padding: "0.5rem 1rem",
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                cursor: "pointer",
                fontSize: "0.875rem"
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
