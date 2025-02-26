import 'package:flutter/material.dart';

class SquareView extends StatefulWidget {
  const SquareView({super.key});

  @override
  State<SquareView> createState() => _SquareViewState();
}

class _SquareViewState extends State<SquareView>
    with SingleTickerProviderStateMixin {
  late final AnimationController _animationController;
  late final Animation<double> _animation;

  late final double _squareSize;

  late bool _isLeftAnimation;
  late bool _isRightAnimation;
  late double? _leftPosition;
  late double? _rightPosition;
  @override
  void initState() {
    _isLeftAnimation = false;
    _isRightAnimation = false;
    _squareSize = 50;
    _animationController = AnimationController(
      duration: const Duration(seconds: 1),
      vsync: this,
    );
    _animationController.animateTo(0.5, duration: Duration.zero);
    _animation = Tween<double>(begin: 0, end: 1).animate(_animationController);
    _animationController.addListener(() {
      setState(() {});
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    _leftPosition =
        _isLeftAnimation
            ? null
            : (MediaQuery.of(context).size.width - 50 - 64) * _animation.value;
    _rightPosition =
        _isRightAnimation
            ? null
            : (MediaQuery.of(context).size.width - 50 - 64) *
                (1 - _animation.value);

    return Scaffold(
      backgroundColor: Colors.white,
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: Text("Moving Square"),
        backgroundColor: Colors.white,
      ),
      body: Padding(
        padding: EdgeInsets.all(32.0),
        child: Stack(
          fit: StackFit.expand,
          children: [
            Positioned(
              top: 0,
              bottom: 0,
              left: _leftPosition,
              right: _rightPosition,
              child: Center(
                child: Container(
                  width: _squareSize,
                  height: _squareSize,
                  decoration: BoxDecoration(
                    color: Colors.red,
                    border: Border.all(),
                  ),
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  ElevatedButton(
                    onPressed:
                        _isRightAnimation || _animationController.isAnimating
                            ? null
                            : () {
                              _isLeftAnimation = false;
                              _isRightAnimation = true;
                              _animationController.forward();
                            },
                    child: const Text('Right'),
                  ),
                  const SizedBox(width: 8),
                  ElevatedButton(
                    onPressed:
                        _isLeftAnimation || _animationController.isAnimating
                            ? null
                            : () {
                              _isLeftAnimation = true;
                              _isRightAnimation = false;
                              _animationController.reverse();
                            },
                    child: const Text('Left'),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
