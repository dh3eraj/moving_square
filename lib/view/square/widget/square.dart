import 'package:flutter/material.dart';

class Square extends StatelessWidget {
  final double? width;
  final double? height;
  final double value;
  const Square({super.key, this.width, this.height, required this.value});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width ?? 100,
      height: height ?? 100,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
          colors: [
            Color(0xFFEC1940).withValues(alpha: 1 * value),
            Color(0xFF91DC4C).withValues(alpha: 1 * value),
            Color(0xFF288fee).withValues(alpha: 1 * value),
            Color(0xFF288fee).withValues(alpha: 1 - value),
            Color(0xFF91DC4C).withValues(alpha: 1 - value),
            Color(0xFFEC1940).withValues(alpha: 1 - value),
          ],
        ),
      ),
      child: Text(
        "Square",
        style: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          letterSpacing: 1,
          foreground:
              Paint()
                ..style = PaintingStyle.fill
                ..color = Colors.black.withValues(alpha: 0.7),
        ),
      ),
    );
  }
}
