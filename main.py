from dotenv import load_dotenv
from llama_index.agent import ReActAgent
from llama_index.llms import OpenAI
from llama_index.tools import QueryEngineTool, ToolMetadata

from pdf import rec_engine
from prompts import context

load_dotenv()


tools = [
    QueryEngineTool(
    query_engine=rec_engine,
    metadata=ToolMetadata(
        name="rec_data",
        description="this gives detailed information about UC San Diego Recreation",
    ),
    ),
]

llm = OpenAI(model="gpt-3.5-turbo-0125")
agent = ReActAgent.from_tools(tools, llm=llm, verbose=True, context=context)

while (prompt := input("Enter a prompt (q to quit): ")) != "q":
    result = agent.query(prompt)
    print(result)
