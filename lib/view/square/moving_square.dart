import 'package:flutter/material.dart';
import 'package:moving_square/res/widgets/custom_icon_button.dart';
import 'package:moving_square/view/square/widget/square.dart';

class MovingSquare extends StatefulWidget {
  const MovingSquare({super.key});

  @override
  State<MovingSquare> createState() => _MovingSquareState();
}

/// [SingleTickerProviderStateMixin] provides a single [Ticker] that is configured to only tick while the current tree is enabled, as defined by [TickerMode].
class _MovingSquareState extends State<MovingSquare>
    with SingleTickerProviderStateMixin {
  /// A controller for an animation.
  late final AnimationController _animationController;

  late final Animation<double> _positionAnimation;

  /// Size of the [Square]
  late final double _squareSize;

  /// True if [CustomIconButton] and [Square] is moving towards left
  late bool _isLeftAnimation;

  /// True if [CustomIconButton] and [Square] is moving towards right
  late bool _isRightAnimation;

  ///The distance that the [Square] is from the left of the stack.
  late double? _leftPosition;

  ///The distance that the [Square] is from the right of the stack.
  late double? _rightPosition;

  /// Padding from the edges of the screen
  late final double _padding;

  ///Override this method to perform initialization that depends on the location at which this object was inserted into the tree (i.e., [context]) or on the widget used to configure this object (i.e., [widget]).
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
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _animationController.addListener(() {
        _setPositions();
        setState(() {});
      });
    });
    _animationController.animateTo(0.5, duration: Duration.zero);
    super.initState();
  }

  ///updates the [_leftPosition] and [_rightPosition] accodring  to the [_positionAnimation.value]
  void _setPositions() {
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

  ///Called when a dependency of this [State] object changes.
  ///that later changed, the framework would call this method to notify this object about the change.
  ///
  /// **_setPositions** and **setState((){})** is called to update the UI.
  @override
  void didChangeDependencies() {
    _setPositions();
    setState(() {});
    super.didChangeDependencies();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      child: Scaffold(
        backgroundColor: Color(0xFFF7F7F7),
        extendBodyBehindAppBar: true,
        appBar: AppBar(
          automaticallyImplyLeading: false,
          title: Center(
            child: Text(
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
          ),
          backgroundColor: Colors.transparent,
        ),
        body: Padding(
          padding: EdgeInsets.all(_padding),
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
                          !(_isLeftAnimation ||
                              _animationController.isAnimating),
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
      ),
    );
  }
}
