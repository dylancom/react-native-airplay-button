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
  MPVolumeView *volumeView = [[MPVolumeView alloc] init];
  volumeView.showsVolumeSlider = false;

  return volumeView;
}

@end