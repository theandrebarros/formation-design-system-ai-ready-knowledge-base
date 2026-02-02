## Introduction

This questionnaire covers security aspects of Model Context Protocol (MCP) servers being evaluated for use within FanDuel. This questionnaire is designed to assess both 1st party MCP servers (developed internally by FanDuel) and 3rd party MCP servers (developed by external parties).

Please make a copy of and complete this questionnaire thoroughly and submit it to the Product Security Team for review. Some sections may not be applicable to the MCP Server you are requesting for review. The Product Security Team will use these responses to conduct a comprehensive threat assessment and determine appropriate security controls and monitoring requirements.

This questionnaire is intended as a high-level security assessment. Additional detailed security reviews, penetration testing, or code audits may be required based on the responses provided.

### 🔍 Overview

| **MCP Server Name** | Storybook MCP |
| --- | --- |
| **Description** | The Storybook MCP equips AI coding agents with machine-readable component metadata from Storybook. It enables agents to generate code using existing component patterns, access optimized metadata, run self-healing tests, and produce mergeable code that follows team standards. |
| **Updated** | January 26, 2026 |

### 📔 MCP Server Information

| **Repository Link** | https://github.com/storybookjs/mcp-server (Open Source) |
| --- | --- |
| **Publisher/Vendor** | Storybook (Chromatic) - https://storybook.js.org/ |
| **Server Type** | 3rd Party (External) |
| **Domain/Vertical** | Frontend Development / Developer Productivity |
| **Requesting Team** | Formation Design System Team / Frontend Architecture |
| **Tier Classification** | P3 (Internal Development Tool) |
| **Current State** | TESTING (Early Access Program) |
| **Architecture Diagram** | N/A (Local STDIO tool, standard MCP architecture) |
| **Data Flow Diagram** | N/A (Local data flow only: Cursor <-> MCP Server <-> Local Storybook Files) |
| **Jira Issue for MCP Server Request** | *Pending Creation* |

### 👥 Owners and Contacts

| **Person/Team** | **Contact Info** | **Notes** |
| --- | --- | --- |
| Andre Barros | andre.barros@fanduel.com | Requestor |
| Formation Team | #formation-ds | Pilot Team |

### 🔐 MCP Server Authentication & Authorization

| **Authentication Method** | **None (Local)**. The server runs locally on the developer's machine via STDIO and does not require authentication. |
| --- | --- |
| **Authorization Framework** | **None**. Relies on local file system permissions of the user running the process. |
| **Dynamic Client Registration** | N/A |
| **Access Token Validation** | N/A - No tokens involved. |
| **User Consent Mechanism** | Implicit consent by installing and configuring the server in the `fd-mcp-gateway` or Cursor settings. Access is scoped to the local workspace. |
| **Session Management** | Process-based lifecycle. The server starts when the IDE starts and ends when it closes. No persistent sessions. |
| **Multi-tenancy Support** | N/A - Single-user, local workstation tool. |

### 🛠️ MCP Tool and Capability Management

| **Available Tools** | 1. Component Discovery (list, get metadata)<br>2. Documentation Access (stories, usage snippets)<br>3. Test Execution (interaction tests, accessibility checks) |
| --- | --- |
| **Tool Access Scope** | **Read-only**: Local Storybook configuration, stories, and component files.<br>**Execution**: Local test suites defined in Storybook. |
| **Tool Permissions** | Managed by the `fd-mcp-gateway` configuration and local file system permissions. |
| **Tool Integrity Validation** | Standard npm package integrity checks (checksums) upon installation. |
| **Cryptographic Verification** | Signed npm packages (standard npm registry security). |
| **Tool Update Mechanism** | Manual update via `npm update` or `fd-mcp-gateway` update commands. Authorized by the developer. |
| **Privilege Escalation Prevention** | Runs as a standard user process. No `sudo` or elevated privileges required. |

### 🔒 Data Security and Validation

| **Data Classification** | **INTERNAL**. Accesses source code, component libraries, and design system documentation. |
| --- | --- |
| **Input Validation** | The MCP server validates tool arguments (e.g., component names, file paths) to ensure they are within the project scope. |
| **Output Validation** | Returns structured JSON metadata and test results derived strictly from local files. |
| **Data Sanitization** | No specific sanitization required as inputs/outputs are local. Standard JSON encoding is used. |
| **PII Handling** | **N/A**. The tool does not access or process PII. It only reads code and documentation. |
| **Data Encryption** | **At Rest**: Relies on full-disk encryption of the developer's workstation.<br>**In Transit**: N/A (Local IPC via STDIO). |
| **Data Retention** | No data retention. Data is read on-demand from the file system. |
| **Data Leakage Prevention** | The server has **no network capabilities** and cannot transmit data externally. It operates entirely offline. |

### 🌐 Network and Communication Security

| **Transport Security** | N/A - Local STDIO communication. |
| --- | --- |
| **Certificate Validation** | N/A |
| **Network Segmentation** | N/A - Runs on local workstation. |
| **External Service Communication** | **None**. The server is fully local and does not communicate with any external APIs or services. |
| **API Endpoint Security** | N/A |
| **Rate Limiting** | Limited by local system resources (CPU/RAM). |
| **IP Restrictions** | N/A |

### 🔍 Security Monitoring and Logging

| **Audit Logging** | Standard STDIO logs captured by the IDE (Cursor) or `fd-mcp-gateway`. Logs tool invocations and errors. |
| --- | --- |
| **Log Storage Location** | Local machine logs (e.g., `~/.cursor/logs` or similar). Retention depends on local configuration. |
| **Real-time Monitoring** | Developer supervision during usage. |
| **Anomaly Detection** | None. |
| **Security Alerting** | None. |
| **Log Data Classification** | **INTERNAL**. Logs may contain component names or snippet details. |
| **SIEM Integration** | Not currently integrated. Local dev tool. |

### 💻 Development and Code Security

| **Source Code Repository** | https://github.com/storybookjs/mcp-server |
| --- | --- |
| **Code Review Process** | Open Source project maintained by Chromatic. Internal usage governed by `fd-mcp-gateway` approval process. |
| **Static Code Analysis** | Standard open-source practices. |
| **Dependency Scanning** | `npm audit` can be run during installation. |
| **Secret Management** | **N/A**. The server does not use or manage secrets/credentials. |
| **Vulnerability Management** | Updates provided by vendor (Storybook) via npm. |

### 🏗️ Infrastructure and Deployment

| **AWS Accounts** | N/A - Local installation. |
| --- | --- |
| **Cloud Services** | N/A |
| **IAM Roles and Policies** | N/A |
| **Container Security** | N/A |
| **Infrastructure as Code** | N/A |
| **Deployment Pipeline** | Installed via `fd-mcp-gateway` CLI. |
| **Environment Isolation** | Runs in user space on local developer machine. |

### 🌥️ Cloud and External Dependencies

| **Third-party Dependencies** | Standard Node.js dependencies (see `package.json` in repo). |
| --- | --- |
| **External API Integrations** | None. |
| **Data Storage** | Local file system (read-only access to project files). |
| **Internet Accessibility** | No. Operates offline. |
| **Service Accounts** | None. |

### ⚠️ Risk Assessment

| **Known Security Vulnerabilities** | None known. New tool in Early Access. |
| --- | --- |
| **Security Incidents** | None known. |
| **Compliance Requirements** | Internal Code Security policies. |
| **Business Impact** | **Low**. Compromise is limited to the local developer workstation and the code they have access to (same as any other local dev tool). |
| **Data Sensitivity** | **INTERNAL** (Source Code). |

### Additional Considerations

| **Security Concerns** | Main concern is ensuring the tool strictly adheres to read-only access and does not attempt to exfiltrate code (mitigated by lack of network access). |
| --- | --- |
| **Regulatory Considerations** | None. |
| **Additional Comments** | This tool is essentially a "smart" interface to existing local files, similar to a Language Server Protocol (LSP) server. |

### 🔍 Review Result

| **Result of Security Review** | **PENDING REVIEW** |
| --- | --- |
| **Risk Rating** | **LOW-MEDIUM** |
| **Security Reviewer & Date** | *TBD* |
| **Actions Required Immediately** | 1. Architecture review.<br>2. npm package verification. |
| **Actions Required Before Production** | 1. Developer guidance docs.<br>2. Integration into `fd-mcp-gateway` allowlist. |
| **Actions Required Before Production Traffic** | N/A |
| **Monitoring Requirements** | Standard workstation monitoring. |
| **Review Schedule** | Annual or upon major version release. |
