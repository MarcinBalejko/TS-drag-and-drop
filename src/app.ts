/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

//  '///' - special syntax for typescript
namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
