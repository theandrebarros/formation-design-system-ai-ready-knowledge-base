# [Project Name]

[Brief one-line description of what this project does]

## Overview

[2-3 paragraph description of the project, its purpose, and why it exists]

## Features

- **[Feature 1]**: [Brief description]
- **[Feature 2]**: [Brief description]
- **[Feature 3]**: [Brief description]
- **[Feature 4]**: [Brief description]

## Architecture

[Brief architecture overview, or link to ARCHITECTURE.md]

```
project/
├── [directory]/
│   └── [description]
├── [directory]/
│   └── [description]
└── [main file]
```

## Quick Start

### Prerequisites

- [Requirement 1] (e.g., Node.js 18+)
- [Requirement 2] (e.g., Figma Desktop App)
- [Requirement 3] (e.g., Cursor IDE)

### Installation

```bash
# Install dependencies
npm install

# Build
npm run build

# Run
npm run dev
```

### Configuration

[Configuration steps if needed]

## Usage

### [Use Case 1]

```[language]
// Code example
```

### [Use Case 2]

```[language]
// Code example
```

## Development

### Project Structure

```
[directory]/
├── [subdirectory]/  # [Description]
├── [subdirectory]/  # [Description]
└── [file]          # [Description]
```

### Development Workflow

1. **[Step 1]**: [Description]
2. **[Step 2]**: [Description]
3. **[Step 3]**: [Description]

### Testing

```bash
# Run tests
npm test

# Run specific test
npm test [test-name]

# Coverage
npm run test:coverage
```

## Formation Design System

This project follows the [Formation Design System](~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/README.md).

**Key Tokens**:
- Colors: Use Formation color tokens
- Spacing: Use 4px grid system
- Typography: Use Proxima Nova font family
- Components: Use Formation components when available

## Architecture

This project follows [Clean Architecture](~/Documents/GitHub/fanduel-dev-knowledge/company-patterns/architecture/clean-architecture.md) principles:

- **Domain-Driven Design**: Code organized by business domains
- **Command Pattern**: Operations as commands with handlers
- **Hexagonal Architecture**: Business logic separated from external dependencies

## MCP Tools (if applicable)

This project exposes MCP tools for AI agent integration:

### Available Tools

- **`[tool_name]`**: [Description]
- **`[tool_name]`**: [Description]

### Usage

```bash
# Using in Cursor
[tool_name] --param value
```

## Contributing

### Adding New Features

1. Create domain structure in `domains/[feature-name]/`
2. Implement models, services, handlers
3. Register handlers in command registry
4. Add tests
5. Update documentation

### Code Standards

- TypeScript strict mode
- Formation Design System compliance
- Unit tests for business logic
- Clean architecture principles

## Troubleshooting

### Common Issues

**Issue 1**:
- Problem: [Description]
- Solution: [Solution]

**Issue 2**:
- Problem: [Description]
- Solution: [Solution]

## Related Projects

- **[Project Name]**: [Brief description and link]
- **[Project Name]**: [Brief description and link]

## Support

- **Documentation**: See `docs/` directory
- **Issues**: Create GitHub issue
- **Slack**: #[channel-name]

## License

[License information]

---

**Last Updated**: [Date]  
**Maintained by**: [Team/Person]
