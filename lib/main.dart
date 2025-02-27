import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:moving_square/config/routes/app_routes.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();


  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    /// Creates a [MaterialApp] that uses the [Router] instead of a [Navigator].
    return MaterialApp.router(
      title: "Moving Square",
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Color(0xFF288fee)),
      ),
      debugShowCheckedModeBanner: false,
      routerConfig: AppRoutes.goRouter,
    );
  }
}
