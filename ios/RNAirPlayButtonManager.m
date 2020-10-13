#import <React/RCTViewManager.h>
#import <Foundation/Foundation.h>
#import <AVKit/AVRoutePickerView.h>

@interface RNAirPlayButtonManager : RCTViewManager
@end

@implementation RNAirPlayButtonManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  AVRoutePickerView *airPlayButton = [[AVRoutePickerView alloc] init];
  return airPlayButton;
}

RCT_EXPORT_VIEW_PROPERTY(activeTintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(tintColor, UIColor);

@end