import React from "react";

export default function MastigramForm() {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet="/images/mastigram-form-mobile.png" />
      <source media="(min-width: 769px)" srcSet="/images/mastigram-form.png" />
      <img src="/images/mastigram-form.png" alt="" />
    </picture>
  );
}
