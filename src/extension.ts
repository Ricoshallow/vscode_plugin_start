// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { start } from 'repl';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "start-vscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('start-vscode.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello Vscode from start-vscode!');
	});
	let curTime = vscode.commands.registerCommand('start-vscode.gettime',()=>{
		vscode.window.showInformationMessage(`${new Date()}`);
	});
	let warning = vscode.commands.registerCommand('start-vscode.warning',(name: string)=>{
		vscode.window.showWarningMessage(`warning! you can't touch that ${name}`);
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(curTime);
	context.subscriptions.push(warning);
}

// this method is called when your extension is deactivated
export function deactivate() {}
