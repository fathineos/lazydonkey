import http.server
import socketserver
import os

# Set the port
PORT = 8000

# Change to the directory containing your website files
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create the server
Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)

print(f"Serving at http://localhost:{PORT}")
print("Press Ctrl+C to stop the server")

# Start the server
httpd.serve_forever() 