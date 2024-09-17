const raylib = require('raylib');

  const screenWidth = 800;
  const screenHeight = 450;

  raylib.initWindow(screenWidth, screenHeight, "raylib with Node.js");
  raylib.setTargetFPS(60);

  while (!raylib.windowShouldClose()) {
      raylib.beginDrawing();
      raylib.clearBackground(raylib.RAYWHITE);
      raylib.drawText("Hello, raylib!", 190, 200, 20, raylib.LIGHTGRAY);
      raylib.endDrawing();
  }

  raylib.closeWindow();