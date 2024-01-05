import type { editor } from "@/src/utils/monaco";
export const editorOptions: editor.IStandaloneEditorConstructionOptions = {
	acceptSuggestionOnCommitCharacter: true,
	acceptSuggestionOnEnter: "on",
	accessibilitySupport: "auto",
	autoIndent: "full",
	autoSurround: "languageDefined",
	automaticLayout: true,
	bracketPairColorization: {
		enabled: true,
		independentColorPoolPerBracketType: true
	},
	codeActionsOnSaveTimeout: 750,
	codeLens: true,
	colorDecorators: true,
	contextmenu: true,
	cursorBlinking: "smooth",
	cursorSmoothCaretAnimation: "on",
	cursorStyle: "line",
	disableLayerHinting: false,
	disableMonospaceOptimizations: false,
	dragAndDrop: false,
	fixedOverflowWidgets: true,
	folding: true,
	foldingHighlight: true,
	foldingStrategy: "auto",
	fontLigatures: true,
	formatOnPaste: true,
	formatOnType: true,
	guides: {
		bracketPairs: "active",
		bracketPairsHorizontal: false,
		highlightActiveBracketPair: true,
		highlightActiveIndentation: true,
		indentation: true
	},
	hideCursorInOverviewRuler: false,
	inlineSuggest: {
		enabled: true,
		keepOnBlur: true,
		mode: "prefix",
		showToolbar: "always"
	},
	links: true,
	mouseWheelZoom: true,
	multiCursorMergeOverlapping: true,
	multiCursorModifier: "alt",
	overviewRulerBorder: true,
	overviewRulerLanes: 2,
	quickSuggestions: true,
	quickSuggestionsDelay: 100,
	readOnly: false,
	renderControlCharacters: false,
	renderFinalNewline: "on",
	renderLineHighlight: "all",
	renderWhitespace: "none",
	revealHorizontalRightPadding: 30,
	roundedSelection: true,
	rulers: [],
	scrollBeyondLastColumn: 5,
	scrollBeyondLastLine: false,
	selectOnLineNumbers: true,
	selectionClipboard: true,
	selectionHighlight: true,
	"semanticHighlighting.enabled": true,
	showFoldingControls: "always",
	smoothScrolling: true,
	suggestOnTriggerCharacters: true,
	suggestSelection: "recentlyUsedByPrefix",
	wordBasedSuggestions: "currentDocument",
	wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
	wordWrap: "on",
	wordWrapBreakAfterCharacters: "\t})]?|&,;",
	wordWrapBreakBeforeCharacters: "{([+",
	wordWrapColumn: 80,
	wrappingIndent: "same"
};
