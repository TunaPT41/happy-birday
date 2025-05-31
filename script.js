body {
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  background: linear-gradient(to bottom right, #fdfcfb, #e2d1c3);
  margin: 0;
  padding: 0;
  overflow: hidden;
}
h1 {
  margin-top: 30px;
  color: #ff4081;
  animation: fadeIn 2s ease-in-out;
}
.image-container {
  margin-top: 20px;
}
.rotating {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  animation: rotate 8s linear infinite;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.bubble {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 20px;
  background: pink;
  border-radius: 50%;
  animation: rise 5s linear forwards;
  opacity: 0.7;
}
@keyframes rise {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
