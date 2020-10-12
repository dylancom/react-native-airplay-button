#import <React/RCTViewManager.h>
#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import <MediaPlayer/MediaPlayer.h>

@interface RNAirPlayButtonManager : RCTViewManager
@end

@implementation RNAirPlayButtonManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  if (@available(iOS 11.0, *)) {
    AVRoutePickerView *airplayButton = [[AVRoutePickerView alloc] init];
    airplayButton.activeTintColor = [UIColor blueColor];
    airplayButton.tintColor = [UIColor whiteColor];
    return airplayButton;
  } else {
    // If you still support previous iOS versions, you can use MPVolumeView
    MPVolumeView *airplayButton = [[MPVolumeView alloc] init];
    airplayButton.showsVolumeSlider = NO;
    return airplayButton;
  }
}

@end