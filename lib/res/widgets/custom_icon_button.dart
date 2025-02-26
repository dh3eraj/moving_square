import 'package:flutter/material.dart';

/// Create a custom elevated button from a pair of widgets that serve as the button's
/// [icon] and [label].
///
/// The icon and label are arranged in a row and padded by 12 logical pixels
/// at the start, and 16 at the end, with an 8 pixel gap in between.
class CustomIconButton extends StatelessWidget {
  final bool enable;
  final IconData icon;
  final void Function() onPressed;
  final String label;
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
