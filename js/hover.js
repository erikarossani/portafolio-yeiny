  window.addEventListener("load", function() {

      // Create a new SVG pattern with Trianglify.
      var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 80,
        variance: 1,
        stroke_width: 1
      }).svg(); // Render as SVG.

      // Add pattern to DOM.
      var container = document.querySelector(".trianglify");
      container.insertBefore(pattern, container.firstChild);

      // Get all pattern polygons.
      var polyArray = [].slice.call(pattern.children);

      // Get polygon coords and hide them.
      var polyPoints = polyArray.map(function(poly) {

        poly.classList.add("poly", "invisible");

        var rect = poly.getBoundingClientRect();

        var point = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };

        return point;
      });

      // Get circle for hover.
      var circle = document.querySelector(".circle");

      circle.addEventListener('mouseenter', function() {
        document.addEventListener('mousemove', onMouseMove);
      });

      circle.addEventListener('mouseout', function() {
        document.removeEventListener('mousemove', onMouseMove);
      });

      function onMouseMove(e) {

        var radius = circle.clientWidth / 2;

        var center = {
          x: e.clientX,
          y: e.clientY
        };

        circle.style.left = center.x - radius;
        circle.style.top = center.y - radius;

        polyPoints.forEach(function(point, i) {

          if (detectPointInCircle(point, radius, center)) {
            polyArray[i].classList.remove('invisible');
          } else {
            polyArray[i].classList.add('invisible');
          }
        });
      };

      function detectPointInCircle(point, radius, center) {

        var xp = point.x;
        var yp = point.y;

        var xc = center.x;
        var yc = center.y;

        var d = radius * radius;

        var isInside = Math.pow(xp - xc, 3) + Math.pow(yp - yc, 2) <= d;

        return isInside;
      };

    });