import 'package:flutter/material.dart';

class CustomIconButton extends StatelessWidget {
  final IconData icon;
  final void Function() onPressed;
  final String label;
  final bool enable;
  const CustomIconButton({
    super.key,
    required this.icon,
    required this.onPressed,
    required this.label,
    this.enable = true,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: enable ? onPressed : null,
      label: Text(
        label,
        style: TextStyle(
          letterSpacing: 1,
          foreground:
              Paint()
                ..style = PaintingStyle.fill
                ..color = enable ? Colors.black : Colors.grey,
        ),
      ),
      icon: Icon(icon, color: enable ? Colors.black : Colors.grey),
    );
  }
}
