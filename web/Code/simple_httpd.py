# This is an example of how to start a simple HTTP server (using Python 3.x).

from http.server import HTTPServer, CGIHTTPRequestHandler

port = 8000

httpd = HTTPServer(('', port), CGIHTTPRequestHandler)
print("Starting simple_httpd on port: " + str(httpd.server_port))
httpd.serve_forever()