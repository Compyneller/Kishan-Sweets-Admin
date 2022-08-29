import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import ProtectedRoute from "./ProtectedRoute";
const Home = lazy(() => import(`./home`));
export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <ProtectedRoute>
        <Switch>
          <Route path={`${APP_PREFIX_PATH}/home`} component={Home} />
          <Route
            path={`${APP_PREFIX_PATH}/category-master`}
            component={lazy(() => import(`./pages/CategoryMaster`))}
          />
          <Route
            path={`${APP_PREFIX_PATH}/sub-category-master`}
            component={lazy(() => import(`./pages/SuperSubCategory`))}
          />
          <Redirect
            from={`${APP_PREFIX_PATH}`}
            to={`${APP_PREFIX_PATH}/home`}
          />
        </Switch>
      </ProtectedRoute>
    </Suspense>
  );
};

export default React.memo(AppViews);
