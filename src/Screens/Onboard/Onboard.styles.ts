import {createStyles} from '@src/Config/Theme/createStyles';

import {ThemeConfig} from '@src/Config';

export const useOnboardStyle = createStyles((theme: ThemeConfig.Theme) => ({
  container: {
    flex: 1,
  },
  imagesContainer: {
    flex: 2 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    padding: 0,
  },
  images: {
    position: 'absolute',
  },
  imageElipsis: {
    position: 'absolute',
    width: '100%',
  },
  textContainer: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '20%',
  },

  title: {
    fontFamily: 'BentonSans-Bold',
    fontSize: 22,
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 20,
    fontFamily: 'BentonSans-Book',
    fontSize: 12,
    color: theme.colors.white,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: theme.colors.green,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'BentonSans-Bold',
    color: theme.colors.white,
    fontWeight: 'bold',
  },
}));
