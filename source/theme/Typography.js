import React from 'react';
import {Button, Container, Typography} from '@material-ui/core';

const TypographyDemo = () =>
  <Container
    bgcolor="secondary.main">
    {/* <Typography color="secondary.light" variant="h2">
      H2 Here for u
    </Typography> */}
    <Typography variant="h2" color="primary"  align="center">
      H2 Variant - Primary
    </Typography>
    <Typography variant="h4" color="secondary">
      H4 Variant - Secondary
    </Typography>
    <Typography variant="body1" color="error">
      Body 1:
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusamus dignissimos deleniti tempora quod illo. Provident perspiciatis, ad id, dignissimos tempore sapiente nihil fuga quaerat odit cupiditate atque doloremque nam.
    </Typography>
    <Typography variant="body2" color="primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia mollitia hic ducimus numquam qui! Omnis, doloribus? Aliquid, enim sequi numquam omnis, illum optio nobis fuga blanditiis iste illo voluptatem.
    </Typography>
  </Container>;

export default TypographyDemo;
