# Open CMS Back Office



# 1. Open Card Management System – Summary Overview


openCMS:
  title: "Open Card Management System – Summary Overview"
  description: >
    The Open Card Management System (OpenCMS) is a centralized platform for card lifecycle
    management, customer servicing, batch processing, product configuration, transactional
    monitoring, fee structuring, and operational audit tracking. Accessed via Unified
    Back-Office, it supports makers, checkers, administrators, and operations teams.

![Back Office Overview](/img/BO1.jpg)

# 1.1 System Access & Roles

  systemAccess:
    login: "CMS login page for all users"
    userProfile:
      features:
        - passwordChange
        - sessionManagement

    roles:
      description: "Role Management controls permissions and module access."
      capabilities:
        - defineRoleNames
        - managePermissions
        - moduleAccessControl

    userManagement:
      description: "Create and manage administrative and operational users."
      capabilities:
        - addUser
        - editUser
        - activateDeactivateUser
        - auditTrailTracking

![System Access & Roles](/img/BO2.jpg)

# 2. Core Modules Overview

  modules:

    - section: "2.1 CMS Dashboard Overview"
      description: >
        The dashboard provides unified access to Batch Management, Customer Management,
        Transaction Monitoring, Product Management, Fee Management, and Audit Logs.
      analytics:
        - transactionAnalytics
        - cardAnalytics

![CMS Dashboard Overview](/img/BO3.jpg)

# 2.2 Batch Management

    - section: "2.2 Batch Management"
      overview: >
        Handles batch uploads and processing for card lifecycle operations.
      features:
        - uploadBatchFiles
        - trackBatchStatus
        - batchSummaryReports
        - successFailureAnalysis
        - cardInformationReports
        - cardRenewalProcessing

![Batch Management](/img/BO4.jpg)

# 2.3 Customer Management

    - section: "2.3 Customer Management"
      overview: >
        Centralized module for servicing customers and managing card/account-related data.
      searchParameters:
        - cnic
        - mobileNumber
        - cardNumber
      capabilities:
        - updateCustomerDetails
        - viewLinkedCards
        - modifyCardDetails
        - manageAccountInformation
        - updateTransactionLimits
        - countryCodeBlockRules
        - mccBlockRules

![Customer Management](/img/BO5.jpg)

# 2.4 Transaction Monitoring

    - section: "2.4 Transaction Monitoring"
      overview: >
        Real-time and historical monitoring of all transaction types.
      transactionTypes:
        - isoTransactions
        - safTransactions
        - realTimeTransactions
        - consolidatedSummaries
      filters:
        - rrn
        - stan
        - cardNumber
        - transactionType
        - dateRange
        - status
      additionalFeatures:
        - downloadableReports
        - realTimeMonitoring

![Transaction Monitoring](/img/BO6.jpg)

# 2.5 Product Management

    - section: "2.5 Product Management"
      overview: >
        Defines and configures product-level behaviors and restrictions.
      configurationItems:
        - channelConfigurations
        - transactionSetups
        - productDefinitions
        - transactionMatrix
        - mccBlockRules
        - countryBlockRules
        - limitProfiles
        - binAndSchemeSetup
        - branchChannelAvailability

![Product Management](/img/BO7.jpg)

# 2.6 Audit Log

    - section: "2.6 Audit Log"
      overview: >
        Tracks all system-wide actions with complete traceability.
      auditFields:
        - timestamp
        - moduleName
        - action
        - oldValue
        - newValue
        - username
        - ipAddress
      capabilities:
        - filterAuditLogs
        - viewDetailedChangeHistory

# 2.7 Fee Management

    - section: "2.7 Fee Management"
      overview: >
        Manage card and transaction-level fees including slabs and waivers.
      features:
        - createFeeProfiles
        - configureFeeSlabs
        - defineFeeFrequency
        - applyConditionalWaivers
      waiverConditions:
        - firstXTransactions
        - firstXMonths
        - minimumSpendThreshold
      feeModels:
        - fixedFees
        - percentageBasedFees

# 3. System Summary

  systemSummary: >
    OpenCMS centralizes card lifecycle, customer servicing, product configuration,
    transaction oversight, and compliance monitoring in a unified administrative interface.
    It is permission-controlled, workflow-enabled, and fully audit-driven.
