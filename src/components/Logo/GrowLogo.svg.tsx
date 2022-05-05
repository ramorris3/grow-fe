import { useColorModeValue } from '@chakra-ui/react';
import { useColors } from '../../hooks';

export const GrowLogo = () => {
  const green = useColorModeValue('var(--chakra-colors-green-700)', 'var(--chakra-colors-green-400)');
  const yellow = "#FFC329";
  const textColor = useColors().defaultText;

  return (
    <svg width="183" height="24" viewBox="0 0 183 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.5337 24C43.349 24 45.056 21.2229 45.056 17.3248V6.29299H41.7184V7.59236H41.6675C40.6484 6.59873 39.298 6.11465 37.9223 6.11465C34.6101 6.11465 32.1643 8.73885 32.1643 12.4076C32.1643 16.0255 34.6866 18.5223 38.1006 18.5223C39.5783 18.5223 40.8267 18.0127 41.7184 17.0955H41.7694V18.3439C41.7694 19.8217 40.5974 21.0955 38.2789 21.0955C36.6484 21.0955 35.4509 20.6115 34.228 19.9236L33.4382 22.7516C34.9159 23.5924 36.6229 24 38.5337 24ZM38.7121 15.5159C36.9286 15.5159 35.5528 14.2675 35.5528 12.3057C35.5528 10.4204 36.8522 9.12102 38.7121 9.12102C40.4955 9.12102 41.8458 10.3949 41.8458 12.2803C41.8458 14.1656 40.5465 15.5159 38.7121 15.5159Z" fill={textColor}/>
      <path d="M47.72 18.7516H51.0576V12.9936C51.0576 11.1083 52.1531 9.73248 54.2168 9.73248C54.4207 9.73248 54.7519 9.73248 55.1086 9.75796V6.11465H54.8538C53.4016 6.11465 52.0512 6.82803 51.1086 8.10191H51.0576V6.29299H47.72V18.7516Z" fill={textColor}/>
      <path d="M62.3028 18.9809C66.1754 18.9809 68.9016 16.3312 68.9016 12.535C68.9016 8.71338 66.1754 6.11465 62.3028 6.11465C58.3283 6.11465 55.6786 8.81529 55.6786 12.535C55.6786 16.2548 58.3283 18.9809 62.3028 18.9809ZM62.3028 15.9745C60.392 15.9745 59.0672 14.4713 59.0672 12.535C59.0672 10.5732 60.3665 9.09554 62.3028 9.09554C64.1372 9.09554 65.513 10.4968 65.513 12.535C65.513 14.5732 64.0863 15.9745 62.3028 15.9745Z" fill={textColor}/>
      <path d="M73.3189 18.7516H76.1979L78.4145 11.1847H78.44L80.682 18.7516H83.561L87.7903 6.29299H84.4527L82.0833 13.9108H82.0323L79.7903 6.29299H77.1151L74.8986 13.9108H74.8731L72.4782 6.29299H69.1151L73.3189 18.7516Z" fill={textColor}/>
      <path d="M99.2652 18.9809C100.947 18.9809 101.762 18.6242 102.552 18.1911L101.711 15.5159C101.151 15.7962 100.539 15.949 100.131 15.949C99.3416 15.949 99.0614 15.4395 99.0614 14.3439V9.07006H102.424V6.29299H99.0614V1.88535L95.7238 2.24204V6.29299H94.2461V9.07006H95.7238V14.828C95.7238 17.6306 97.1251 18.9809 99.2652 18.9809Z" fill={textColor}/>
      <path d="M104.313 18.7516H107.651V12.4586C107.651 10.2166 108.772 9.09554 110.555 9.09554C112.135 9.09554 112.976 9.85987 112.976 12.1274V18.7516H116.313V11.2866C116.313 7.46497 114.403 6.11465 111.753 6.11465C110.122 6.11465 108.696 6.67516 107.676 7.79618H107.651V0H104.313V18.7516Z" fill={textColor}/>
      <path d="M130.499 12.4076C130.499 8.76433 128.053 6.11465 124.537 6.11465C120.843 6.11465 118.218 8.71338 118.218 12.5096C118.218 16.4076 120.919 18.9809 124.741 18.9809C127.518 18.9809 129.123 17.9618 130.167 16.6115L128.002 14.5987C127.339 15.414 126.371 16 124.97 16C123.288 16 122.091 15.1083 121.683 13.6051H130.422C130.448 13.4013 130.499 12.8153 130.499 12.4076ZM124.511 9.01911C125.964 9.01911 126.855 9.88535 127.187 11.2102H121.709C122.091 9.78344 123.161 9.01911 124.511 9.01911Z" fill={textColor}/>
      <path d="M132.579 18.7516H135.916V12.9936C135.916 11.1083 137.012 9.73248 139.076 9.73248C139.279 9.73248 139.611 9.73248 139.967 9.75796V6.11465H139.712C138.26 6.11465 136.91 6.82803 135.967 8.10191H135.916V6.29299H132.579V18.7516Z" fill={textColor}/>
      <path d="M146.523 18.9809C148.153 18.9809 149.402 18.3694 150.268 17.2484L150.319 17.2739V18.7516H153.504V6.29299H150.166V7.71975L150.115 7.74522C149.223 6.67516 147.899 6.11465 146.446 6.11465C143.109 6.11465 140.586 8.78981 140.586 12.5605C140.586 16.4076 143.109 18.9809 146.523 18.9809ZM147.16 15.9745C145.274 15.9745 143.975 14.5732 143.975 12.586C143.975 10.4459 145.351 9.09554 147.16 9.09554C148.943 9.09554 150.319 10.5732 150.319 12.586C150.319 14.6242 148.867 15.9745 147.16 15.9745Z" fill={textColor}/>
      <path d="M156.166 23.7962H159.504V17.3758L159.555 17.3503C160.421 18.3949 161.644 18.9809 163.198 18.9809C166.663 18.9809 169.186 16.4076 169.186 12.5605C169.186 8.78981 166.663 6.11465 163.3 6.11465C161.772 6.11465 160.447 6.67516 159.555 7.71975H159.504V6.29299H156.166V23.7962ZM162.612 15.9745C160.778 15.9745 159.351 14.6242 159.351 12.586C159.351 10.5732 160.676 9.09554 162.587 9.09554C164.37 9.09554 165.797 10.4459 165.797 12.586C165.797 14.5732 164.472 15.9745 162.612 15.9745Z" fill={textColor}/>
      <path d="M171.989 23.7962H175.377L182.078 6.29299H178.69L175.862 13.9363H175.811L172.779 6.29299H169.212L174.205 17.9873L171.989 23.7962Z" fill={textColor}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.07297 14.5578C1.52069 14.5578 1.06788 15.0068 1.12042 15.5566C1.57394 20.3018 5.22274 24 9.65677 24C14.0908 24 17.7396 20.3018 18.1931 15.5566C18.2457 15.0068 17.7928 14.5578 17.2406 14.5578H2.07297Z" fill={yellow}/>
      <path d="M9.66768 9.01298C9.90291 9.01295 11.4301 7.41151 12.0157 5.06997C12.4793 3.21657 12.4046 0 9.66768 0C7.25678 0.0202087 6.68883 2.54509 7.32035 5.06997C7.90602 7.41151 9.44217 9.01298 9.66768 9.01298Z" fill={green} />
      <path d="M8.20176 12.9137C8.36806 12.7474 8.31554 10.5351 7.07393 8.46527C6.09118 6.82693 3.76389 4.6053 1.82862 6.54058C0.138142 8.25963 1.5219 10.4466 3.75381 11.7854C5.82366 13.027 8.04229 13.0732 8.20176 12.9137Z" fill={green} />
      <path d="M11.1209 12.9228C11.2872 13.0892 13.4995 13.0366 15.5693 11.795C17.2077 10.8123 19.4293 8.48498 17.494 6.54971C15.775 4.85923 13.588 6.24299 12.2492 8.4749C11.0076 10.5448 10.9614 12.7634 11.1209 12.9228Z" fill={green} />
    </svg>
  );
};