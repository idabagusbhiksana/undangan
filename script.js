.music-control {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.8);
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  cursor: pointer;
  display: none; /* Hidden by default */
  z-index: 1000;
}

.music-control.playing {
  background: rgba(220, 20, 60, 0.8);
  color: white;
}

.music-icon {
  font-size: 18px;
}
