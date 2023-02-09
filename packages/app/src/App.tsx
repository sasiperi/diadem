import React from 'react';
import { Navigate, Route } from 'react-router';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import { TechRadarPage } from '@backstage/plugin-tech-radar';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';

import { AlertDisplay, OAuthRequestDialog } from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import { oktaAuthApiRef } from '@backstage/core-plugin-api';
import { SignInPage } from '@backstage/core-components';

import { BackstageTheme, lightTheme } from '@backstage/theme';
/**
 * The `@backstage/core-components` package exposes this type that
 * contains all Backstage and `material-ui` components that can be
 * overridden along with the classes key those components use.
 */
import { BackstageOverrides } from '@backstage/core-components';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import {
  BackstagePaletteOptions,
  createTheme,
  genPageTheme,
  darkTheme,
  SimpleThemeOptions,
  shapes,
} from '@backstage/theme';

import AdpLogo from './logo/ADP_Logo_Digital.jpg';



export const customPalleteColors: BackstagePaletteOptions = {
  ...lightTheme.palette,
  /*
  primary: {
    main: '#d97800',
  },
  secondary: {
    main: '#004ABE',
  },
  */
  navigation: {
    // Sidebar
    background: `#20357c`,
    indicator: '#20357c',
    color: '#fff',
    selectedColor: '#fff',
    navItem: {
      hoverBackground: '#3051a3',
    },
  },
  
};
/**
 * Sets the theme options object
 */
 const customThemeOptions: SimpleThemeOptions = {
  palette: customPalleteColors,
  defaultPageTheme: 'home',
  /* Headers pages */
  pageTheme: {
    home: genPageTheme({colors: ['#20357c', '#3051a3'], shape: shapes.wave}),
  },
};

/**
 * Create a custom theme using the defined options
 */
const myCustomTheme: BackstageTheme = createTheme(customThemeOptions);

export const createCustomThemeOverrides = (
  theme: BackstageTheme,
): BackstageOverrides => {
  return {
    BackstageHeader: {
      header: {
        backgroundRepeat: `no-repeat`,
        //backgroundColor: '#115357',
        backgroundColor: '#00004d',
        /* Below is transaparent Red */
        /* backgroundImage: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='40px' height='25px' viewBox='0 0 40 25' enable-background='new 0 0 40 25' xml:space='preserve'%3E%3Cimage id='image0' width='40' height='25' x='0' y='0' href='data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP%2BgvaeTAAAAB3RJTUUH5gwPFSko%2BkT54gAABPpJREFUSMftll2MVlcVhp93n3O%2B%2BYVOagrVph1wiuMgWCQYpUmNTZMGE63QaFLTaC9MbEj0wl5o8EJjtMZ65U8NNUYjF9pUxQtNijFpYyLQiRJw%2BP8pbaEXlnFg5vuEme/nnPV6MR8BHEqhXugFb7Jvzn6z1rvftfY%2BC27iJv630I2QD9%2B/nijLNyfYxNwcIjAi9Q%2BABPZlnCDmmqQiB8Sq8b9fM2e6EYHtyTeoZqYpliwRWSrIsv9YqUhFnrWnZ6guXKBq1FFK6QpOyop8oD%2B1z56lrM8wPtTL/g%2BM/vcOHlj3PqLZBCl3WX7V8BEgruJiEzgqaUcxNLSz02g8SPhLxukyTgMYV0rb3SlP57csItod7tl/4u0L3Dd6F0hIesARv0OqI50B3I0jILB7sO8CcqSfS5pxxNeRjiPVuwIXYy9HHJHSF11VO1tTZ/nwudm3J3DinhW4UyJpUVTVb7DXKM83pr7%2B4y7LZUjnlBSuqqXudNo4%2Bhx%2BDPsxpFnsHlJ6OOvvf81lNeSyM0fEakc8BUwrSw9hTmUDA6zec%2BjGevC%2B96zgwMQJotPBVfVp7AeQnol2e7w637gtmnO/irnZj8fc3P3RbP7RZfkHhzcraSvSU9i3Xix9zM5uiVbzT67KZ7FbSvoKMOrwp6IsIcsW5H9LgU/XglVjy0hFcaftJ5AOK6VnUp6DnbCXdkt2CHsr0gvYGx3%2BkbL0a2AcqGFj%2B3nsH2Nk/G1SOgi8DNxbLF6cudlckD%2B/lrhD962jrNeZPHiS2947/DgwKvF5pF7gg0rpbodzINneA%2By58OopBpcP/9X2D6hinbK0zcZAQ1n2OhGnHLESez2QAbNAn6sqgasbEtiZmgKbJWPL1jniC0g7UNrrqvot9li3h/u6JSQVBYMjywH/mcrnDSv6Rka%2B2f7HG88itarz57cRsWm%2B%2B/U0dh8wAuxq/XOq03P70ut3cP/aMdxqQUo90ek8AfRI%2Bh52A/tnXLpg6paRaLWomk3ywYH1wCDw2tzxExVSY2BsTBeOHNkG7FRKryOddFTfAZKk7fmiQYi4foFlo4GyDCV9DPthpJ8gTdt%2BhLSgdTOltNYRG7KBgTscfgTYq5R2Yz9uWDR77NhzSqlme8D2vUQ8Cbwb6RtZX9/uaLfpGV4G%2B45eEfiqz8zE6rtxVYH0DlfV77HfqSz7pCO2YH8GqDP//uVdp7aQ0hkivg80kf4i6UnsB21/F5hD2gB8GXsjMIV0SLBVeb7dESWCNYdefWsHj274KJ2pSTrTM6Si%2BBz2h5TSFuxR7E1IP8T%2BaVfgKPALoEdZtsNwWFIbLIcfxd6MVMfOEDVMBhxRSo%2BqyF%2BJZquO58t6NXFXdXBibBjPf17piOeBYaR92O8CzilLGxw%2B3R0AVgK7gH8hvdIV3Ys9Agwi/VLSpCO%2BhnQAexg4lmrFZ5FWSGkXMP3%2BieNv1mkL30H19lE1m2CvBU4CL2DXmXfnW9Fqn779oU9cpM8CLwIvYxtbQAPpOaW0Kevt3QzsBl7EngL2Ai8BIakiSejaP7MFu/vXjAImms2afekAAqvI2w47FcX84AAy1C7GEaBaLVpnJtvFrUMoZWBnjiguZXCkWq2TilqmvChxsOpvB6/fQWw0f0vbQPPiMrRchYngspIYaF3OA7d777yDrKcXz8%2BO1ZX7aoPsqMrotIjqGvPlTdzE/wH%2BDTzqo5BxTF5KAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEyLTE1VDIxOjQxOjM5KzAwOjAwthTDNAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMi0xNVQyMTo0MTo0MCswMDowMFgUN0IAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMTItMTVUMjE6NDE6NDArMDA6MDAPARadAAAAAElFTkSuQmCC' /%3E%3C/svg%3E")`, */
        backgroundImage: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='40px' height='25px' viewBox='0 0 40 25' enable-background='new 0 0 40 25' xml:space='preserve'%3E%3Cimage id='image0' width='40' height='25' x='0' y='0' href='data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAQAAADp0aTuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmDA8VOAyVnj4jAAACWUlEQVQ4y%2B2UW2jOYRzHP///%2B/JaOeaCEkpqmyzJilZDOUQusGJJLXEh4Uo5pSaZoijukFMKkV0occOoGTEXMi0yh7lZDtu7d8w2/D8u9trBttfi1vfu%2BT7P8%2Bl3eh74r39V0L/tXwMyAQPiXeSAiB8AhMTSbkTUFxIMiIuzncJfVwho4zk3qGQhWwmBgBYecJX63piBgQsoJ0lD%2BkxEFpOIcZokpTwnCYxiCrVsofIPQAFGcIUZrOAFk2kkYhzfyaKEdbSSoIhXjKadPA7SyHLeDlg7mI%2BI6/3mXjHbWjdb4kfrPWeepUZ%2Bdq6nbPSpRRbb5jYzNVHEidb4xPFirkl3m2%2BZZ2z2rrlW2WGhqyyzxmdOt8arxrqB8X7HZSPZbGAY%2BUwlRkg11cBDjpLPWSJSvOM1ORQQo5UswvQEDBDfLN97zelW%2B8Uv6h47/Rwb3WfoSBNetM12DzvHTx7pmXK8T3wJtpHgEC2cJgAC7qe3CxjOGyJSwHmqqOclBwgp78mI9wlyKUUcp4nVXU6MmSxhAmt4TBUbGc5l4mRRQBlTKKUqU7pjvWedeV5QkzaZUne6zmYbvOJMdxj51XmWqx%2B8Y7Hx3j2Od%2BMAKGE2u8hmJcc4iWRzlgQ3WUQHIWvZRIoYQ4lRy1rqSGV4HWKub9THNvjMSSJOs8l6K7ztfd/b6gn3q09s9pE5LnPM7xPYu4b5vKKOkBQnOt8orVQwhoCAFJe4zi0Wc5uQJp52fw49FXRHCCS61u3pGgQMTXsRHekWDUmvv3XOX5AB%2BNvW4H7FYFCn/mvw%2BglmP0WGIb5sgAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0xMi0xNVQyMTo1NjoxMSswMDowMOSMTpcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMTItMTVUMjE6NTY6MTErMDA6MDCV0fYrAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTEyLTE1VDIxOjU2OjEyKzAwOjAw8yzNaQAAAABJRU5ErkJggg==' /%3E%3C/svg%3E")`,
        backgroundSize: `80px 30px`,
        backgroundPositionX: `0%`,
        backgroundPositionY: `0%`,
      },
    },


  
  
  /*
  BackstageSidebar: {
    drawer: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'flex-start',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: theme.zIndex.appBar,
      background: theme.palette.navigation.background,
      overflowX: 'hidden',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      width:'100',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shortest,
      }),
      '& > *': {
        flexShrink: 0,
      },
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '& .MuiButtonBase-root': {
        textTransform: 'none',
      },
    },
  },
  
  */
   
   /*
    BackstageSidebar: {
      drawer: {
        background: `#003380`,
      }
    },
    */
    /*
    BackstageSidebarItem: {
      root: {
        color: '#003380',
        
      },
    },
    */
  };
};

const customTheme: BackstageTheme = {
  //...lightTheme,
  ...myCustomTheme,
  overrides: {
    // These are the overrides that Backstage applies to `material-ui` components
    ...myCustomTheme.overrides,
    // These are your custom overrides, either to `material-ui` or Backstage components.
    ...createCustomThemeOverrides(myCustomTheme),
  },
};

const app = createApp({
  apis,
  themes: [{
    id: 'my-theme',
    title: 'My Custom Theme',
    variant: 'light',
    Provider: ({ children }) => (
      <ThemeProvider theme={customTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    ),
  }],
  components: {
    SignInPage: props => (
      <SignInPage
        {...props}
        auto
        provider={{
          id: 'okta-auth-provider',
          title: 'Okta',
          message: 'Sign in using OKTA',
          apiRef: oktaAuthApiRef,
        }}
      />
    ),
  },
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
});

const AppProvider = app.getProvider();
const AppRouter = app.getRouter();

const routes = (
  <FlatRoutes>
    <Route path="/" element={<Navigate to="catalog" />} />
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route path="/create" element={<ScaffolderPage />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/tech-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
  </FlatRoutes>
);

const App = () => (
  <AppProvider>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </AppProvider>
);

export default App;


