/* eslint-disable react/no-multi-comp */
import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { List, Typography } from "@material-ui/core";

import { NavigationListItem } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const NavigationList = (props) => {
  const { onCloseNavBar, pages, ...rest } = props;
  return (
    <List>
      {pages.reduce(
        (items, page) =>
          reduceChildRoutes({ onCloseNavBar, items, page, ...rest }),
        []
      )}
    </List>
  );
};

NavigationList.propTypes = {
  depth: PropTypes.number,
  pages: PropTypes.array,
};

const reduceChildRoutes = (props) => {
  const { onCloseNavBar, items, page, depth } = props;

  if (page.children) {
    items.push(
      <NavigationListItem
        onCloseNavBar={onCloseNavBar}
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={false}
        title={page.title}
      >
        <NavigationList
          onCloseNavBar={onCloseNavBar}
          depth={depth + 1}
          pages={page.children}
        />
      </NavigationListItem>
    );
  } else {
    items.push(
      <NavigationListItem
        onCloseNavBar={onCloseNavBar}
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
      />
    );
  }

  return items;
};

const Navigation = (props) => {
  const {
    onCloseNavBar,
    title,
    pages,
    className,
    component: Component,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Component {...rest} className={clsx(classes.root, className)}>
      {title && <Typography variant="overline">{title}</Typography>}
      <NavigationList onCloseNavBar={onCloseNavBar} depth={0} pages={pages} />
    </Component>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  pages: PropTypes.array.isRequired,
  title: PropTypes.string,
};

Navigation.defaultProps = {
  component: "nav",
};

export default Navigation;
