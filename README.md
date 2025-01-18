# geo-data-backend

<!-- start and enable docker -->

sudo systemctl start docker
sudo systemctl enable docker


<!-- build -->

docker build -t geo-data-backend .

<!-- run -->

docker run -p 3000:3000 geo-data-backend

<!-- lie Link -->

https://geo-data-backend-sirq.onrender.com/

