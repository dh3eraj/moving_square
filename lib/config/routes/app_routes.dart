import 'package:go_router/go_router.dart';
import 'package:moving_square/view/splash/splash.dart';
import 'package:moving_square/view/square/moving_square.dart';

class AppRoutes {
  static const String square = 'square';

  static GoRouter goRouter = GoRouter(
    initialLocation: "/",
    routes: [
      GoRoute(
        path: "/",
        builder: (context, state) {
          return Splash();
        },
      ),
      GoRoute(
        name: square,
        path: "/square",
        builder: (context, state) {
          return MovingSquare();
        },
      ),
    ],
  );
}
