from dotenv import load_dotenv
from llama_index.agent import ReActAgent
from llama_index.llms import OpenAI
from llama_index.tools import QueryEngineTool, ToolMetadata

from python.pdf import rec_engine
from python.prompts import context

load_dotenv()



tools = [
    QueryEngineTool(
    query_engine=rec_engine,
    metadata=ToolMetadata(
        name="rec_data",
        description="this gives detailed information about UC San Diego Recreation",
    ),
    )
]

llm = OpenAI(model="gpt-3.5-turbo-0125")
agent = ReActAgent.from_tools(tools, llm=llm, verbose=True, context=context)

def chat_with_bot(user_input):
    response = agent.query(user_input)  # This line calls your chatbot with the user input
    if hasattr(response, 'action') and response.action == 'Ask for clarification':
        return "I'm not quite sure what you are asking. Can you explain?"
    elif isinstance(response, dict) and response.get('action') == 'Ask for clarification':
        return "I'm not quite sure what you are asking. Can you explain?"
    else:
        return str(response)

