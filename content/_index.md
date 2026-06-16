---
title: "Security and Authentication"
description: "Manage your account security settings and two-factor authentication."
nav:
  - id: account
    icon: user
    label: Your account
  - id: security
    icon: shield
    label: Security
    active: true
  - id: teams
    icon: users
    label: Teams
  - id: billing
    icon: credit-card
    label: Billing
two_factor:
  title: Two-factor authentication
  options:
    - id: sms
      label: Text message (SMS)
      description: The 6-digit code will be sent to your mobile phone.
      active: false
    - id: authenticator
      label: Authenticator app
      description: Use a mobile app to get the 6-digit code.
      active: true
recovery:
  title: Recovery codes
  description: Use recovery codes to access your account if you lose your 2FA device.
  codes:
    - 4022-3850
    - 4920-3022
    - 9402-2294
    - 4029-3302
    - 3920-4492
    - 4402-3920
sessions:
  title: Active sessions
  items:
    - device: Macbook Pro
      icon: monitor
      location: Warsaw, Poland
      current: true
    - device: iPhone 13
      icon: smartphone
      location: Warsaw, Poland
      last_active: 2 mins ago
---
