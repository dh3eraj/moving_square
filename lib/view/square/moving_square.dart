import 'package:flutter/material.dart';
import 'package:moving_square/res/widgets/custom_icon_button.dart';
import 'package:moving_square/view/square/widget/square.dart';

class MovingSquare extends StatefulWidget {
  const MovingSquare({super.key});

  @override
  State<MovingSquare> createState() => _MovingSquareState();
}

class _MovingSquareState extends State<MovingSquare>
    with SingleTickerProviderStateMixin {
  late final AnimationController _animationController;
  late final Animation<double> _positionAnimation;

  late final double _squareSize;
  late bool _isLeftAnimation;
  late bool _isRightAnimation;
  late double? _leftPosition;
  late double? _rightPosition;
  late final double _padding;
  @override
  void initState() {
    _isLeftAnimation = false;
    _isRightAnimation = false;
    _leftPosition = 0;
    _rightPosition = 0;
    _squareSize = 100;
    _padding = 32;
    _animationController = AnimationController(
      duration: const Duration(seconds: 1),
      vsync: this,
    );
    _positionAnimation = Tween<double>(
      begin: 0,
      end: 1,
    ).animate(_animationController);
    _animationController.animateTo(0.5, duration: Duration.zero);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _animationController.addListener(() {
        changePosition();
        setState(() {});
      });
    });
    super.initState();
  }

  void changePosition() {
    _leftPosition =
        _isLeftAnimation
            ? null
            : (MediaQuery.of(context).size.width - _squareSize - 2 * _padding) *
                _positionAnimation.value;
    _rightPosition =
        _isRightAnimation
            ? null
            : (MediaQuery.of(context).size.width - _squareSize - 2 * _padding) *
                (1 - _positionAnimation.value);
  }

  @override
  void didChangeDependencies() {
    changePosition();
    setState(() {});
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFF7F7F7),
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: Text(
          "Moving Square",
          style: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            letterSpacing: 1,
            foreground:
                Paint()
                  ..style = PaintingStyle.fill
                  ..color = Colors.black,
          ),
        ),
        backgroundColor: Colors.transparent,
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
                child: Square(
                  width: _squareSize,
                  height: _squareSize,
                  value: _positionAnimation.value,
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  CustomIconButton(
                    enable:
                        !(_isRightAnimation ||
                            _animationController.isAnimating),
                    icon: Icons.arrow_forward,
                    label: "Right",
                    onPressed: () {
                      _isLeftAnimation = false;
                      _isRightAnimation = true;
                      _animationController.forward();
                    },
                  ),

                  const SizedBox(width: 8),
                  CustomIconButton(
                    enable:
                        !(_isLeftAnimation || _animationController.isAnimating),
                    icon: Icons.arrow_back,
                    label: "Left",
                    onPressed: () {
                      _isLeftAnimation = true;
                      _isRightAnimation = false;
                      _animationController.reverse();
                    },
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
