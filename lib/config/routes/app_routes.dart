import 'package:go_router/go_router.dart';
import 'package:moving_square/view/splash/splash_screen.dart';
import 'package:moving_square/view/square/moving_square.dart';

/// [AppRoutes] is used to access Routes name
///
/// [goRouter] method is used to config router.
class AppRoutes {
  /// The name of this go route.
  ///
  /// ```dart
  ///     context.goNamed(AppRoutes.square);
  /// ```
  static const String square = 'square';

  /// [goRouter] method is used to config router.
  ///
  /// Containe all routes used by go router
  static GoRouter goRouter = GoRouter(
    ///Optional if [routes] contains a [GoRoute] with /, default /.
    ///
    /// provide value if [initialLocation] is other than /
    initialLocation: "/",
    routes: [
      GoRoute(
        path: "/",
        builder: (context, state) {
          return SplashScreen();
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
