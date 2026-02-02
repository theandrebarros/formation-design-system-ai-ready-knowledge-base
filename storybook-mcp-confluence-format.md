# Template - New MCP Server Questionnaire: Storybook MCP

---

## 🔍 Overview

| Field | Value |
|-------|-------|
| **MCP Server Name** | Storybook MCP |
| **Requestor** | Andre Barros |
| **Submission Date** | January 26, 2026 |
| **Status** | PENDING SECURITY REVIEW |
| **Documentation URL** | [Storybook MCP Announcement](https://storybook.js.org/blog/storybook-mcp-sneak-peek/) |

### Description

The Storybook MCP equips AI coding agents with machine-readable component metadata from Storybook. It enables agents to:

* Generate code using existing component patterns from your design system
* Access component metadata, usage snippets, and types in an optimized payload
* Run component tests (interaction and accessibility) to self-heal bugs
* Produce mergeable code that follows team standards with fewer tokens

This MCP bridges the gap between AI code generation and production-quality frontend code by providing agents the same context that developers use: which components exist, how they behave, and what "correct" looks like.

### Business Justification

**Problem**: FanDuel's Formation design system is extensive with hundreds of components. When using AI coding agents, they frequently generate code with:
* Wrong prop types
* Incorrect component usage patterns  
* Code that doesn't match Formation standards
* Render errors that require manual fixing

**Solution**: Storybook MCP provides AI agents with curated, machine-readable context about Formation components, enabling them to generate Formation-compliant code that matches team standards.

**Expected Benefits**:
* Higher quality AI-generated code
* Faster development cycles
* Reduced token usage (optimized metadata)
* Self-healing test loop catches bugs automatically
* Consistent design system usage

---

## 📔 MCP Server Information

| Field | Value |
|-------|-------|
| **Publisher/Vendor** | Storybook (Chromatic) |
| **Vendor URL** | https://storybook.js.org/ |
| **Server Type** | 3rd Party (External) - Open Source |
| **Deployment Model** | Local STDIO server |
| **Current Status** | Early Access Program (as of December 2025) |
| **Update Date** | January 26, 2026 |

**Maintained by**: Official Storybook team at Chromatic

---

## 🔐 MCP Server Authentication & Authorization

### Authentication Method
**Local connection** to Storybook instance - No external authentication required

### Authorization Framework
File system permissions (accesses local Storybook project files)

### Dynamic Client Registration
N/A - Local server

### Access Token Validation
N/A - No tokens required (local server)

### User Consent Mechanism
Access is limited to the local Storybook project in the developer's workspace

### Session Management
* Server lifecycle tied to local Storybook instance
* No persistent sessions or external connections

### Multi-tenancy Support
N/A - Single developer workspace

---

## 🛠️ MCP Tool and Capability Management

### Available Tools

#### Component Discovery & Metadata
* List available components in Storybook
* Get component metadata (props, types, usage examples)
* Access component stories and documentation
* Retrieve component usage snippets

#### Test Execution & Self-Healing
* Run interaction tests on generated components
* Execute accessibility tests
* Get test failure details for autonomous correction
* Iterate on component implementations based on test feedback

#### Context Optimization
* Serve curated component metadata in optimized payloads
* Reduce token usage by providing only relevant component context
* Access component types and prop definitions

### Tool Access Scope

**Read-only access** to:
* Local Storybook files and metadata
* Component stories and documentation
* Component type definitions

**Test execution**:
* Against local Storybook test suite

**No write operations** to source code (agents write code, MCP provides context)

**Limited to**: Components defined in local Storybook instance

### Tool Permissions

✅ **CAN Access**:
* Read Storybook configuration files
* Access component stories and documentation
* Execute tests defined in Storybook
* Read component type definitions

❌ **CANNOT Access**:
* Write to source files
* Make network requests
* Access files outside Storybook project
* Modify git repository

### Tool Integrity Validation
* Source code is open source and auditable
* Package distributed via npm (official Storybook organization)
* Can be verified through npm package signatures

### Cryptographic Verification
Standard npm package verification

### Tool Update Mechanism
* Standard npm update cycle (`npm update` or similar)
* Controlled by developer, not automatic

### Privilege Escalation Prevention
* Runs with same permissions as local user
* No elevated privileges required
* No network access to external services
* Cannot access files outside project workspace

---

## 🔒 Data Security and Validation

### Data Classification

**INTERNAL** - Company component library and design system patterns

**Potential Access To**:
* Component implementations (code)
* Design system documentation
* Component usage patterns
* Test specifications

**Does NOT Access**:
* Production data
* Customer data
* API credentials
* Environment variables

### Input Validation

Agents provide prompts and commands. MCP validates:
* File paths stay within project boundaries
* Test execution is limited to defined test suites
* Component queries reference existing components

### Output Validation

MCP returns:
* Structured component metadata (JSON)
* Test results (pass/fail with details)
* Type definitions (TypeScript)

All outputs are derived from local Storybook files

### Data Sanitization
No sanitization required - all data sourced from local, developer-controlled files

### PII Handling
**No PII access**. MCP only reads component definitions and tests.

### Data Encryption

| Type | Method |
|------|--------|
| **At Rest** | Standard file system encryption (if enabled on machine) |
| **In Transit** | N/A - Local IPC communication only, no network transmission |

### Data Retention
* No data retention - MCP reads data on-demand from local files
* No caching beyond process lifecycle

### Data Leakage Prevention
* ✅ No external network calls
* ✅ No telemetry or analytics sent externally
* ✅ All data stays on local machine
* ✅ Communication limited to local MCP protocol

---

## 🌐 Network and Communication Security

### Transport Security
**Local IPC** (Inter-Process Communication) via STDIO  
No network transport required

### Certificate Validation
N/A - No TLS/HTTPS (local communication only)

### Network Segmentation
N/A - No network access

### External Service Communication
**None** - Completely local operation

### API Endpoint Security
N/A - No external APIs

### Rate Limiting
Local process limits only (CPU/memory)

### IP Restrictions
N/A - No network access

---

## 🔍 Security Monitoring and Logging

### Audit Logging
* Standard application logging to local machine
* No centralized audit logs (local tool)

**Logs may include**:
* Component queries
* Test execution results
* Error messages

### Security Monitoring
Developer is responsible for monitoring local process

---

## 🌥️ Cloud and External Dependencies

### External API Integrations
**None** - Fully local server

### Data Storage
No persistent storage. Reads from local Storybook files on-demand.

### Internet Accessibility
**Not required** - operates entirely offline

### npm Dependencies
Standard Storybook and Node.js dependencies (auditable via `npm audit`)

---

## ⚠️ Risk Assessment

### Security Incidents

**No known security incidents** specific to Storybook MCP (new tool, Early Access as of Dec 2025)

**Storybook Track Record**:
* 88,999+ GitHub stars
* Used by 100,000+ developers
* Maintained by Chromatic (enterprise-backed)
* Regular security updates

### Compliance Requirements

| Requirement | Status |
|-------------|--------|
| **Internal Code Exposure** | Component implementations may contain proprietary patterns |
| **External Data Transfer** | ✅ All data stays local |

### Business Impact

**Impact Level**: LOW-MEDIUM - Exposure limited to component library patterns

**If Compromised**:
* ❌ Attacker could access component implementations (already in git repo)
* ✅ No production system access
* ✅ No customer data access
* ✅ No credential access

**Risk Assessment**: Similar to a developer workstation compromise

### Data Sensitivity
**INTERNAL** - Design system components and patterns

---

## 🔍 Review Result

### Result of Security Review
⏳ **PENDING REVIEW**

### Risk Rating
**LOW-MEDIUM**

**Justification**:
* ✅ Local-only operation (no network access)
* ✅ Read-only access to code already in git repo
* ✅ Standard file system permissions
* ✅ No credential or PII access
* ✅ Similar risk profile to other local development tools

### Security Reviewer & Date
*Awaiting Assignment*

### Actions Required Immediately
1. ⏳ Security team review of tool architecture
2. ⏳ Verification of npm package source
3. ⏳ Review of file access patterns
4. ⏳ Assessment of component data sensitivity

### Actions Required Before Production
1. ⏳ Developer guidance documentation
2. ⏳ Installation instructions via fd-mcp-gateway
3. ⏳ Best practices for Formation integration
4. ⏳ Review of Early Access stability

### Actions Required Before Production Traffic
N/A - Local development tool only

### Monitoring Requirements
Standard developer workstation monitoring applies

### Review Schedule
* Initial review upon submission
* Re-review when tool exits Early Access to general availability

---

## 📋 Technical Requirements

### Prerequisites
* React design system (Formation)
* Storybook 10.1-alpha or later
* Node.js and npm
* CI coverage (for test execution)
* fd-mcp-gateway installed

### Installation Plan

```bash
# Install via fd-mcp-gateway
fd-mcp-gateway install storybook-mcp

# Add to ~/.cursor/fd-mcp-gateway.json
{
  "mcpServers": {
    "storybook": {
      "command": "npx",
      "args": ["@storybook/mcp-server"],
      "cwd": "${workspaceFolder}"
    }
  }
}
```

### Integration Points
* Local Storybook instance
* Formation component library
* Component test suites
* TypeScript type definitions

---

## 🎯 Implementation Plan

### Phase 1: Security Review & Approval
1. Submit questionnaire to Product Security team
2. Address any security concerns raised
3. Obtain approval for pilot program

### Phase 2: Early Access Enrollment
1. Apply to Storybook Early Access Program
2. Receive access credentials/instructions
3. Set up development environment

### Phase 3: Pilot Testing
1. Test with Formation design system team (2-3 developers)
2. Validate code generation quality
3. Measure token usage and performance
4. Document issues and feedback

### Phase 4: Documentation & Rollout
1. Create usage guide for Formation developers
2. Document best practices and patterns
3. Add to fd-mcp-gateway approved servers
4. Announce availability to frontend teams

**Estimated Timeline**: 4-6 weeks (pending security review)

---

## 📚 Additional Resources

* [Storybook MCP Announcement](https://storybook.js.org/blog/storybook-mcp-sneak-peek/)
* [Formation Design System Docs](../formation-ds/README.md)
* [Approved MCP Servers](./mcp-servers.md)
* [FanDuel MCP Gateway Documentation](https://fanduel.atlassian.net/wiki/spaces/BUILDER/pages/mcp-gateway)

---

## 🤝 Stakeholders

| Role | Name | Responsibility |
|------|------|----------------|
| **Requestor** | Andre Barros | Submission & implementation |
| **Security Reviewer** | *TBD* | Security assessment |
| **Formation Team** | *TBD* | Pilot testing & validation |
| **Builder Tools** | #builder-tools | Gateway integration |

---

## ✅ Approval Signatures

| Role | Name | Date |
|------|------|------|
| **Requestor** | Andre Barros | *Pending* |
| **Security Reviewer** | *Pending Assignment* | *Pending* |
| **Approval Date** | *Pending Review* | *Pending* |

---

## 📝 Notes for Security Reviewers

{panel:title=Key Security Considerations|borderStyle=solid|borderColor=#ccc|titleBGColor=#f7f7f7|bgColor=#ffffff}
1. **Local-Only Operation**: This is a local development tool with no network access, similar to ESLint, Prettier, or TypeScript Language Server
2. **Read-Only Access**: MCP only reads component definitions; it does not write to source files
3. **Existing Tool Extension**: Storybook is already an approved and widely-used tool at FanDuel; this simply adds an MCP interface to existing functionality
4. **Risk Profile**: Similar to other local dev tooling - primary concern is ensuring component code sensitivity is appropriate for AI access
5. **Early Access Status**: May warrant initial pilot with limited team (Formation) before broad rollout
6. **No Credential Access**: MCP cannot access .env files, secrets, or production credentials
7. **Workspace-Scoped**: Each developer's instance only accesses their own local Storybook project
{panel}

---

**Document Version**: 1.0  
**Last Updated**: January 26, 2026  
**Confluence Page**: *To be created in SEC space*
